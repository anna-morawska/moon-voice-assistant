"use strict";
const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");

const chooseCategory = require("./intentHandlers/choose-category");
const getAddress = require("./intentHandlers/get-address");
const navigate = require("./intentHandlers/navigate");
const redirect = require("./intentHandlers/redirect");
const contactInfo = require("./intentHandlers/contact-info");
const setSocketId = require("./intentHandlers/set-socket-id");
const readBlog = require("./intentHandlers/read-blog");
const fallback = require("./intentHandlers/fallback");
const intents = require("./constants/intents");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    agent.requestSource = agent.ACTIONS_ON_GOOGLE;

    let intentMap = new Map();
    intentMap.set(intents.CHOOSE_BLOGPOST_CATEGORY, chooseCategory);
    intentMap.set(intents.GET_ADDRESS, getAddress);
    intentMap.set(intents.NAVIGATE, navigate);
    intentMap.set(intents.READ_BLOG, readBlog);
    intentMap.set(intents.REDIRECT, redirect);
    intentMap.set(intents.CONTACT_INFO, contactInfo);
    intentMap.set(intents.SET_SOCKET_ID, setSocketId);
    intentMap.set(intents.FALLBACK, fallback);

    agent.handleRequest(intentMap);
  }
);
