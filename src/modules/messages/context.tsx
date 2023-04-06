import React, { createContext } from 'react';

interface IMessagesState
{

}

const MessagesContext = createContext<IMessagesState>({})

export const useMessagesContext