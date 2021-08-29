const { ApolloError } = require('apollo-server-errors');
const asyncHandler = require('express-async-handler');
const {
  validateUserInput,
  comparePassword,
} = require('../helpers/input/inputHelpers');
const User = require('../models/User');
const Movie = require('../models/Movie');
const TVShow = require('../models/TVShow');
const Profile = require('../models/Profile');
const Child = require('../models/Child');

const registerUser = asyncHandler(
  async (email, password, doNotEmailMe, res) => {
    const user = await User.create({
      email,
      password,
      doNotEmailMe,
    });

    const sEmail = email.split('@')[0];

    const p = await Profile.create({
      profileName: sEmail,
    });

    const c = await Child.create({
      childName: 'Child',
    });

    await user.profiles.push(p._id);
    user.child = await c._id;

    await user.save();

    res.results = {
      success: true,
      ID: user._id,
    };
  }
);

const isReceivedMailAlready = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  var emailState;

  if (!user) {
    emailState = false;
  } else {
    emailState = true;
  }

  res.results = {
    success: true,
    emailState,
  };
});

const registrationPhaseState = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  var registrationPhaseRoute;

  if (user) {
    if (user.registrationPhase) {
      registrationPhaseRoute = 'login';
    } else {
      registrationPhaseRoute = 'password';
    }
  } else {
    registrationPhaseRoute = 'registration';
  }
  res.results = {
    success: true,
    registrationPhaseRoute,
  };
});

const registrationPhaseStateUpdate = asyncHandler(async (email, rpsu, res) => {
  const user = await User.findOne({ email });

  if (user) {
    user.registrationPhaseState = await rpsu;
    await user.save();
  } else {
    throw new ApolloError('There is no such user', 401);
  }

  res.results = {
    success: true,
  };
});

const login = asyncHandler(async (email, password, res) => {
  if (!validateUserInput(email, password)) {
    throw new ApolloError('Please check your Inputs', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApolloError('Please check your input', 400);
  }

  if (!comparePassword(password, user.password)) {
    throw new ApolloError('Please check your credentials', 400);
  }

  res.results = {
    success: true,
    ID: user._id,
    registrationPhaseState: user.registrationPhaseState,
  };
});

const creditOptionAddToUser = asyncHandler(
  async (email, fName, lName, cardNumber, cardExpiry, cardCVV, res) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    } else {
      var creditCards = await user.creditCards;

      const creditCard = {
        fName: fName,
        lName: lName,
        cardNumber: cardNumber,
        cardExpiry: cardExpiry,
        cardCVV: cardCVV,
      };

      await creditCards.push(creditCard);

      user.creditCards = await creditCards;

      await user.save();
    }

    res.results = { success: true };
  }
);

const rememberMe = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  res.results = {
    success: true,
    password: user.password,
  };
});

//bunda değişiklik yaptık
const addProfileToUser = asyncHandler(
  async (email, profileName, profileImageUrl, kids, res) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    } else {
      const profile = await Profile.create({
        profileName,
        profileImageUrl,
        kids,
      });

      if (kids) {
        profile.maturitySettings.ageLimit = await '7+';
        profile.maturitySettings.sliderValue = await 25;
        await profile.save();
      }

      // var profiles = await user.profiles;

      // const profile = {
      //   profileName: profileName,
      //   profileImageUrl: profileImageUrl,
      // };

      // await profiles.push(profile);

      user.profiles.push(profile._id);

      await user.save();
    }

    res.results = {
      success: true,
    };
  }
);

//bunda değişiklik yaptık
const getProfilesFromUser = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  } else {
    profiles = [];

    for (let i = 0; i < user.profiles.length; i++) {
      const p = await Profile.findById(user.profiles[i]);

      await profiles.push(p);
    }
  }

  res.results = {
    success: true,
    profiles: profiles,
  };
});

//bunda değişiklik yaptık
const changeToProfileName = asyncHandler(
  async (
    email,
    profileName,
    profileImageUrl,
    language,
    ageLimit,
    autoplayNextEpisode,
    previews,
    profileIndex,
    res
  ) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    } else {
      for (let i = 0; i < user.profiles.length; i++) {
        if (i == profileIndex) {
          // let profile = await {
          //   profileName: profileName,
          //   profileImageUrl: profileImageUrl,
          //   language: language,
          //   maturitySettings: {
          //     ageLimit: ageLimit,
          //   },
          //   autoplayControls: {
          //     autoplayNextEpisode: autoplayNextEpisode,
          //     previews: previews,
          //   },
          // };

          const p = await Profile.findById(user.profiles[i]);

          p.profileName = await profileName;
          p.profileImageUrl = await profileImageUrl;
          p.language = await language;
          p.maturitySettings.ageLimit = await ageLimit;
          p.autoplayControls.autoplayNextEpisode = await autoplayNextEpisode;
          p.autoplayControls.previews = await previews;

          await p.save();

          // user.profiles[i] = await profile;
        }
      }
      // await user.save();
    }

    res.results = {
      success: true,
    };
  }
);

//bunda değişiklik yaptık
const deleteProfileToUser = asyncHandler(async (email, profileIndex, res) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  } else if (profileIndex == '0') {
    throw new ApolloError('You cannot delete index 0', 401);
  } else {
    for (let i = 0; i < user.profiles.length; i++) {
      if (i == profileIndex) {
        const p = await Profile.findByIdAndRemove(user.profiles[profileIndex]);

        await user.profiles.splice(i, 1);
      }
    }
    await user.save();
  }

  res.results = { success: true };
});

const getUserID = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  res.results = {
    success: true,
    ID: user._id,
  };
});

const getUserFromID = asyncHandler(async (ID, res) => {
  const user = await User.findById(ID);

  if (!user) {
    throw new ApolloError('There is no such user', 400);
  }

  let profiles = [];

  for (let i = 0; i < user.profiles.length; i++) {
    const p = await Profile.findById(user.profiles[i]);

    await profiles.push(p);
  }

  const child = await Child.findById(user.child);

  res.results = {
    success: true,
    user: user,
    profiles: profiles,
    child: child,
  };
});

//bunda değişiklik yaptık
const isThePasswordCorrect = asyncHandler(
  async (email, password, clickProfileIndex, res) => {
    if (!validateUserInput(email, password)) {
      throw new ApolloError('Please check your Inputs', 400);
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new ApolloError('Please check your input', 400);
    }

    if (!comparePassword(password, user.password)) {
      throw new ApolloError('Please check your credentials', 400);
    }

    const p = await Profile.findById(user.profiles[clickProfileIndex]);

    res.results = {
      success: true,
      sliderValue: p.maturitySettings.sliderValue,
    };
  }
);

//bunda değişiklik yaptık
const changeToUserSliderValue = asyncHandler(
  async (
    email,
    ageLimit,
    sliderValue,
    clickProfileIndex,
    titleRestrictions,
    kids,
    res
  ) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 400);
    }

    if (clickProfileIndex != 'Child') {
      const p = await Profile.findById(user.profiles[clickProfileIndex]);

      p.maturitySettings.ageLimit = await ageLimit;
      p.maturitySettings.sliderValue = await sliderValue;
      p.kids = await kids;

      if (kids) {
        p.maturitySettings.ageLimit = await '7+';
        p.maturitySettings.sliderValue = await 25;
      }

      let t = [];

      t = await p.titleRestrictions;

      for (let a = 0; a < titleRestrictions.length; a++) {
        if (titleRestrictions[0]) {
          await t.push(titleRestrictions[a]);
        }
      } //burda bir hata var iyice bak

      p.titleRestrictions = await t;

      await p.save();
    } else {
      const c = await Child.findById(user.child);

      c.maturitySettings.ageLimit = await ageLimit;
      c.maturitySettings.sliderValue = await sliderValue;

      let t = [];

      t = await c.titleRestrictions;

      for (let a = 0; a < titleRestrictions.length; a++) {
        if (titleRestrictions[0]) {
          await t.push(titleRestrictions[a]);
        }
      } //burda bir hata var iyice bak

      c.titleRestrictions = await t;

      await c.save();
    }

    res.results = {
      success: true,
    };
  }
);

//bunda değişiklik yaptık
const getUnclickedProfiles = asyncHandler(
  async (email, clickProfileIndex, res) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    }

    let profilesImage = [];
    let profilesName = [];
    let ind = [];

    for (let i = 0; i < user.profiles.length; i++) {
      if (i != clickProfileIndex) {
        const p = await Profile.findById(user.profiles[i]);

        await profilesImage.push(p.profileImageUrl);
        await profilesName.push(p.profileName);
        await ind.push(i);
      }
    }

    res.results = {
      success: true,
      profilesImage: profilesImage,
      profilesName: profilesName,
      i: ind,
    };
  }
);

const adminLogin = asyncHandler(async (email, password, res) => {
  if (!validateUserInput(email, password)) {
    throw new ApolloError('Please check your Inputs', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApolloError('Please check your input', 400);
  }

  if (!comparePassword(password, user.password)) {
    throw new ApolloError('Please check your credentials', 400);
  }

  if (user.role != 'admin') {
    throw new ApolloError('You are not a Admin', 401);
  }

  res.results = {
    success: true,
  };
});

const addWatchHistory = asyncHandler(
  async (ID, name, clickProfileIndex, res) => {
    const m = await Movie.findOne({ name });

    const tvs = await TVShow.findOne({ name });

    if (!m && !tvs) {
      throw new ApolloError('There is no such Movie or TV Show', 401);
    }

    const user = await User.findById(ID);

    if (m) {
      const p = await Profile.findById(user.profiles[clickProfileIndex]);
      await p.watchHistory.push(m._id);
      await p.save();
    } else if (tvs) {
      const p = await Profile.findById(user.profiles[clickProfileIndex]);
      await p.watchHistory.push(tvs._id);
      await p.save();
    }

    res.results = {
      success: true,
    };
  }
);

const addMyList = asyncHandler(async (ID, name, clickProfileIndex, res) => {
  const m = await Movie.findOne({ name });

  const tvs = await TVShow.findOne({ name });

  if (!m && !tvs) {
    throw new ApolloError('There is no such Movie or TV Show', 401);
  }

  const user = await User.findById(ID);

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  if (m) {
    const p = await Profile.findById(user.profiles[clickProfileIndex]);
    await p.myList.push(m._id);
    await p.save();
  } else if (tvs) {
    const p = await Profile.findById(user.profiles[clickProfileIndex]);
    await p.myList.push(tvs._id);
    await p.save();
  }

  const p1 = await Profile.findById(user.profiles[clickProfileIndex]);

  let movies = [];
  let tvShows = [];

  for (let i = 0; i < p1.myList.length; i++) {
    const movie = await Movie.findById(p1.myList[i]);
    const tvShow = await TVShow.findById(p1.myList[i]);

    if (movie) {
      await movies.push(movie);
    } else if (tvShow) {
      await tvShows.push(tvShow);
    }
  }

  res.results = {
    success: true,
    movies: movies,
    tvShows: tvShows,
  };
});

const getAllMyListToProfile = asyncHandler(
  async (email, clickProfileIndex, res) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    }

    const p = await Profile.findById(user.profiles[clickProfileIndex]);

    let movies = [];
    let tvShows = [];

    for (let i = 0; i < p.myList.length; i++) {
      const movie = await Movie.findById(p.myList[i]);
      const tvShow = await TVShow.findById(p.myList[i]);

      if (movie) {
        await movies.push(movie);
      } else if (tvShow) {
        await tvShows.push(tvShow);
      }
    }

    res.results = {
      success: true,
      movies: movies,
      tvShows: tvShows,
    };
  }
);

const deleteMyList = asyncHandler(async (ID, name, clickProfileIndex, res) => {
  const m = await Movie.findOne({ name });

  const tvs = await TVShow.findOne({ name });

  if (!m && !tvs) {
    throw new ApolloError('There is no such Movie or TV Show', 401);
  }

  const user = await User.findById(ID);

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  const p = await Profile.findById(user.profiles[clickProfileIndex]);

  for (let i = 0; i < p.myList.length; i++) {
    const m1 = await Movie.findById(p.myList[i]);
    const tvs1 = await TVShow.findById(p.myList[i]);

    if (m1 && m1.name == name) {
      await p.myList.splice(i, 1);
    } else if (tvs1 && tvs1.name == name) {
      await p.myList.splice(i, 1);
    }

    // böyle bişey yok hatası verdit.
  }

  await p.save();

  let movies = [];
  let tvShows = [];

  for (let i = 0; i < p.myList.length; i++) {
    const movie = await Movie.findById(p.myList[i]);
    const tvShow = await TVShow.findById(p.myList[i]);

    if (movie) {
      await movies.push(movie);
    } else if (tvShow) {
      await tvShows.push(tvShow);
    }
  }

  res.results = {
    success: true,
    movies: movies,
    tvShows: tvShows,
  };
});

const isAdmin = asyncHandler(async (adminEmail, res) => {
  const user = await User.findOne({ email: adminEmail });

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  let success;

  if (user.role == 'admin') {
    success = true;
  } else {
    success = false;
  }

  res.results = {
    success: success,
  };
});

const getProfileImageFromUser = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new ApolloError('There is no such user', 401);
  }

  let profileImages = [];

  for (let i = 0; i < user.profiles.length; i++) {
    const p = await Profile.findById(user.profiles[i]);

    await profileImages.push(p.profileImageUrl);
  }
  res.results = {
    success: true,
    images: profileImages,
  };
});

const deleteTitleRestrictions = asyncHandler(
  async (email, clickProfileIndex, videoName, res) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new ApolloError('There is no such user', 401);
    }

    const p = await Profile.findById(user.profiles[clickProfileIndex]);

    if (!p) {
      throw new ApolloError('There is no such profile', 401);
    }

    for (let i = 0; i < p.titleRestrictions.length; i++) {
      if (p.titleRestrictions[i] == videoName) {
        await p.titleRestrictions.splice(i, 1);
      }
    }
    await p.save();

    res.results = {
      success: true,
      titleRestrictions: p.titleRestrictions,
    };
  }
);

const getChildFromUser = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  if (!user) throw new ApolloError('There is no such user', 400);

  const child = await Child.findById(user.child);

  res.results = {
    success: true,
    child,
  };
});

const deleteChildFromUser = asyncHandler(async (email, res) => {
  const user = await User.findOne({ email });

  if (!user) throw new ApolloError('There is no such user', 400);

  const child = await Child.findById(user.child);

  if (!child) throw new ApolloError('There is no such child profile', 400);

  await child.remove();

  user.child = await null;

  await user.save();

  res.results = {
    success: true,
  };
});

const changeChildFromUser = asyncHandler(
  async (
    email,
    childName,
    childImageUrl,
    language,
    ageLimit,
    autoplayNextEpisode,
    previews,
    res
  ) => {
    const user = await User.findOne({ email });

    if (!user) throw new ApolloError('There is no such user', 400);

    const child = await Child.findById(user.child);

    if (!child) throw new ApolloError('There is no such child profile', 400);

    child.childName = await childName;
    child.childImageUrl = await childImageUrl;
    child.language = await language;
    child.maturitySettings.ageLimit = await ageLimit;
    child.autoplayControls.autoplayNextEpisode = await autoplayNextEpisode;
    child.autoplayControls.previews = await previews;

    await child.save();

    res.results = {
      success: true,
    };
  }
);

const isThePasswordCorrectChildProfile = asyncHandler(
  async (email, password, res) => {
    if (!validateUserInput(email, password)) {
      throw new ApolloError('Please check your Inputs', 400);
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new ApolloError('Please check your input', 400);
    }

    if (!comparePassword(password, user.password)) {
      throw new ApolloError('Please check your credentials', 400);
    }

    const c = await Child.findById(user.child);

    res.results = {
      success: true,
      sliderValue: c.maturitySettings.sliderValue,
    };
  }
);

module.exports = {
  registerUser,
  isReceivedMailAlready,
  registrationPhaseState,
  registrationPhaseStateUpdate,
  creditOptionAddToUser,
  addProfileToUser,
  getProfilesFromUser,
  rememberMe,
  login,
  changeToProfileName,
  deleteProfileToUser,
  getUserID,
  getUserFromID,
  isThePasswordCorrect,
  changeToUserSliderValue,
  getUnclickedProfiles,
  adminLogin,
  addWatchHistory,
  addMyList,
  getAllMyListToProfile,
  deleteMyList,
  isAdmin,
  getProfileImageFromUser,
  deleteTitleRestrictions,
  getChildFromUser,
  deleteChildFromUser,
  changeChildFromUser,
  isThePasswordCorrectChildProfile,
};
