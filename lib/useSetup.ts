import { useState, useEffect } from 'react';

export default async function useSetup(jsonUrl) {

  const response = await fetch(jsonUrl);
  const theSetup = await response.json()
  console.log(theSetup); 
  return theSetup;
}