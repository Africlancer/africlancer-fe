import React, { useEffect, useRef, useState } from 'react'
import { ApButton, BrowseLayout } from '@/src/components';
import { FilterComponent } from './components/filter';
import { MainContent } from './components/main';
import { useFreelancersContext } from './context';

export const FreelancersPage = () => {

  const { fetchAllFreelancers, freelancers } = useFreelancersContext()

  return (
    <BrowseLayout browseFunc={fetchAllFreelancers} FilterComponent={FilterComponent} MainContent={MainContent} page="freelancers" />
  )
}