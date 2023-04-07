import React, { useEffect, useRef, useState } from 'react'
import { ApButton, BrowseLayout } from '@/src/components';
import { FilterComponent } from './components/filter';
import { MainContent } from './components/main';
import { useFreelancersContext } from './context';

export const FreelancersPage = () => {

  const { fetchAllFreelancers, freelancers, fetchFreelancersFilter } = useFreelancersContext()

  return (
    <BrowseLayout browseFunc={fetchFreelancersFilter} FilterComponent={FilterComponent} MainContent={MainContent} page="freelancers" />
  )
}