import React from 'react';

export const selectFields = ({
  by,
  descendants,
  id,
  kids,
  parent,
  score,
  time,
  title,
  text,
  type,
  url,
}) => ({
  by,
  descendants,
  id,
  kids,
  parent,
  score,
  time,
  title,
  text,
  type,
  url,
});

export const userSelectFields = ({ about, created, id, karma, submitted }) => ({
  about,
  created,
  id,
  karma,
  submitted,
});
