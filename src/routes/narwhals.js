'use strict';

const express = require('express');

const Narwhals = require('../models/data-collection-class');
const models = require('../models/narwhals')
const narwhals = new Narwhals(models);

const router = express.Router();

// Route Declarations
router.get('/narwhals', getNarwhals);
router.get('/narwhals/:id', getOneNarwhal);
router.post('/narwhals', createNarwhal);
router.put('/narwhals/:id', updateNarwhal);
router.delete('/narwhals/:id', deleteNarwhal);

// Route Handlers
function getNarwhals(req, res) {
  let allNarwhals = narwhals.get()
    .then((result) => {
      (res.status(200).json(result))});}

function getOneNarwhal(req, res) {
  const id = req.params.id;
  let theNarwhal = narwhals.get(id)
    .then((result) => {
      (res.status(200).json(result))});}

function createNarwhal(req, res) {
  let obj = req.body;
  let newNarwhal = narwhals.create(obj)
    .then((result) => {
      (res.status(200).json(result))});
}

function updateNarwhal(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedNarwhal = narwhals.update(id, obj)
    .then((result) => {
      (res.status(200).json(result))});}

function deleteNarwhal(req, res) {
  let id = req.params.id;
  let deletedNarwhal = narwhals.delete(id)
    .then((result) => {
      (res.status(200).json(result))});}


module.exports = router;
