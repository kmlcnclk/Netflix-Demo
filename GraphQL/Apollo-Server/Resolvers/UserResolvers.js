import {
  isReceivedMailAlready,
  registerUser,
  registrationPhaseStateUpdate,
  registrationPhaseState,
  login,
  addProfileToUser,
  rememberMe,
  getProfilesFromUser,
  creditOptionAddToUser,
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
} from '../../../Server/controllers/user';
import { isManager } from '../../../Server/middlewares/auth/admin';
import { isTheUserRegistered } from '../../../Server/middlewares/auth/auth';
import { makeTheUserAdmin } from '../../../Server/controllers/admin';
import { sendJwtToClient } from '../../../Server/helpers/auth/emailTokenHelpers';
const User = require('../../../Server/models/User');

export const UserResolvers = {
  Query: {
    async rememberMe(_, { email }, { res }) {
      await rememberMe(email, res);

      return res.status(200).results;
    },
    async getProfilesFromUser(_, { email }, { res }) {
      await getProfilesFromUser(email, res);

      return res.status(200).results;
    },
    async getAllUser(_, __, ___) {
      const users = await User.find();

      const usersID = await [];

      for (let i = 0; i < users.length; i++) {
        await usersID.push(users[i]._id);
      }

      return usersID;
    },
    async getUserID(_, { email }, { res }) {
      await getUserID(email, res);

      return res.status(200).results;
    },
    async getUserFromID(_, { ID }, { res }) {
      await getUserFromID(ID, res);

      return res.status(200).results;
    },
    async getUnclickedProfiles(_, { email, clickProfileIndex }, { res }) {
      await getUnclickedProfiles(email, clickProfileIndex, res);

      return res.status(200).results;
    },
    async getAllMyListToProfile(_, { email, clickProfileIndex }, { res }) {
      await getAllMyListToProfile(email, clickProfileIndex, res);

      return res.status(200).results;
    },
    async isAdmin(_, { adminEmail }, { res }) {
      await isAdmin(adminEmail, res);

      return res.status(200).results;
    },
    async getProfileImageFromUser(_, { email }, { res }) {
      await getProfileImageFromUser(email, res);

      return res.status(200).results;
    },
    async getChildFromUser(_, { email }, { res }) {
      await getChildFromUser(email, res);

      return res.status(200).results;
    },
  },
  Mutation: {
    async registerUser(_, { email, password, doNotEmailMe }, { res }) {
      await isTheUserRegistered(email);

      await registerUser(email, password, doNotEmailMe, res);

      return res.status(200).results;
    },
    async login(_, { email, password }, { res }) {
      await login(email, password, res);

      return res.status(200).results;
    },
    async makeTheUserAdmin(_, { email, adminID, role }, { res }) {
      await isManager(adminID);

      await makeTheUserAdmin(email, role, res);

      return res.status(200).results;
    },
    async receiveEmail(_, { email }, { res }) {
      await sendJwtToClient(email, res);

      return res.status(200).results;
    },
    async isReceivedMailAlready(_, { email }, { res }) {
      // burda tam olarak ne olduğunu anlamadım ne gerek var buna bir bak.
      await isReceivedMailAlready(email, res);

      return res.status(200).results;
    },
    async registrationPhaseState(_, { email }, { res }) {
      await registrationPhaseState(email, res);

      return res.status(200).results;
    },
    async registrationPhaseStateUpdate(_, { email, rpsu }, { res }) {
      await registrationPhaseStateUpdate(email, rpsu, res);

      return res.status(200).results;
    },
    async creditOptionAddToUser(
      _,
      { email, fName, lName, cardNumber, cardExpiry, cardCVV },
      { res }
    ) {
      await creditOptionAddToUser(
        email,
        fName,
        lName,
        cardNumber,
        cardExpiry,
        cardCVV,
        res
      );

      return res.status(200).results;
    },
    async addProfileToUser(
      _,
      { email, profileName, profileImageUrl, kids },
      { res }
    ) {
      await addProfileToUser(email, profileName, profileImageUrl, kids, res);

      return res.status(200).results;
    },
    async changeToProfileName(
      _,
      {
        email,
        profileName,
        profileImageUrl,
        language,
        ageLimit,
        autoplayNextEpisode,
        previews,
        profileIndex,
      },
      { res }
    ) {
      await changeToProfileName(
        email,
        profileName,
        profileImageUrl,
        language,
        ageLimit,
        autoplayNextEpisode,
        previews,
        profileIndex,
        res
      );

      return res.status(200).results;
    },
    async deleteProfileToUser(_, { email, profileIndex }, { res }) {
      await deleteProfileToUser(email, profileIndex, res);

      return res.status(200).results;
    },
    async isThePasswordCorrect(
      _,
      { email, password, clickProfileIndex },
      { res }
    ) {
      await isThePasswordCorrect(email, password, clickProfileIndex, res);

      return res.status(200).results;
    },
    async changeToUserSliderValue(
      _,
      {
        email,
        ageLimit,
        sliderValue,
        clickProfileIndex,
        titleRestrictions,
        kids,
      },
      { res }
    ) {
      await changeToUserSliderValue(
        email,
        ageLimit,
        sliderValue,
        clickProfileIndex,
        titleRestrictions,
        kids,
        res
      );

      return res.status(200).results;
    },
    async adminLogin(_, { email, password }, { res }) {
      await adminLogin(email, password, res);

      return res.status(200).results;
    },
    async addWatchHistory(_, { ID, name, clickProfileIndex }, { res }) {
      await addWatchHistory(ID, name, clickProfileIndex, res);

      return res.status(200).results;
    },
    async addMyList(_, { ID, name, clickProfileIndex }, { res }) {
      await addMyList(ID, name, clickProfileIndex, res);

      return res.status(200).results;
    },
    async deleteMyList(_, { ID, name, clickProfileIndex }, { res }) {
      await deleteMyList(ID, name, clickProfileIndex, res);

      return res.status(200).results;
    },
    async deleteTitleRestrictions(
      _,
      { email, clickProfileIndex, videoName },
      { res }
    ) {
      await deleteTitleRestrictions(email, clickProfileIndex, videoName, res);

      return res.status(200).results;
    },
    async deleteChildFromUser(_, { email }, { res }) {
      await deleteChildFromUser(email, res);

      return res.status(200).results;
    },
    async changeChildFromUser(
      _,
      {
        email,
        childName,
        childImageUrl,
        language,
        ageLimit,
        autoplayNextEpisode,
        previews,
      },
      { res }
    ) {
      await changeChildFromUser(
        email,
        childName,
        childImageUrl,
        language,
        ageLimit,
        autoplayNextEpisode,
        previews,
        res
      );

      return res.status(200).results;
    },
    async isThePasswordCorrectChildProfile(_, { email, password }, { res }) {
      await isThePasswordCorrectChildProfile(email, password, res);

      return res.status(200).results;
    },
  },
};
