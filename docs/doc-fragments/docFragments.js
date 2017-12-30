var gettingStarted = require('./gettingStarted');
var commonTextualElements = require('./commonTextualElements');
var headings = require('./headings');
var lists = require('./lists');
var images = require('./images');
var codeAndQuotations = require('./codeAndQuotations');
var grid = require('./grid');
var cards = require('./cards');
var cardSections = require('./cardSections');
var formsAndInput = require('./formsAndInput');
var buttons = require('./buttons');
var inputGrouping = require('./inputGrouping');
var header = require('./header');
var navigationBar = require('./navigationBar');
var footer = require('./footer');
var drawer = require('./drawer');
var textHighlighting = require('./textHighlighting');
var toasts = require('./toasts');
var tooltips = require('./tooltips');
var modalDialogs = require('./modalDialogs');
var spoilersAndAccordions = require('./spoilersAndAccordions');
var progressBars = require('./progressBars');

module.exports = [
  gettingStarted,
  commonTextualElements, headings, images, lists, codeAndQuotations,
  grid, cards, cardSections,
  formsAndInput, buttons, inputGrouping,
  header, navigationBar, footer, drawer,
  textHighlighting, toasts, tooltips, modalDialogs, spoilersAndAccordions,
  progressBars
]
