import React from 'react';

export enum AppStep {
  PRE_QUIZ = 'PRE_QUIZ',
  SALES_PAGE = 'SALES_PAGE',
  RITUAL_AGREEMENT = 'RITUAL_AGREEMENT',
  QUIZ = 'QUIZ',
  USER_INPUT = 'USER_INPUT',
  ANALYSIS = 'ANALYSIS',
  CRISIS_RESULT = 'CRISIS_RESULT',
  CONNECTING_LOADER = 'CONNECTING_LOADER',
  CHAT = 'CHAT'
}

export interface QuizQuestion {
  question: string;
  subtext?: string;
  options: string[];
}

export interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: React.ReactNode;
  timestamp: string;
}

export interface ChatOption {
  id: string;
  label: string;
  nextAction: string;
}

export interface UserData {
  name: string;
  age: string;
  partnerName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
  likes: number;
  time: string;
}