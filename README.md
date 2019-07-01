# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @graysonlee/lotide`

**Require it:**

`const _ = require('@graysonlee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head(): returns first element of array
  tail(): returns last element of array
  middle(): returns middle element of array
  countLetters(): returns length of string 
  countOnly(): returns number of occurances of a given object
  eqArrays(): compares two arrays,
  eqObject(): compares two objects,
  findKey(): returns key: ,
  findKeyByValue(): returns key from value,
  flatten(): flattens multiple arrays into one array,
  letterPositions(): returns indexs of every letter,
  map(): maps an array,
  takeUntil(): returns array until given value,
  without(): returns array without specified values,
  assertObjectsEqual(): visual output for eqObjects,
  assertArraysEqual(): visual output for eqArrays,
  assertEqual(): visual output for equal