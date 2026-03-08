import { create } from 'zustand'
import { User, LearningPath, EvidenceSubmission, ValidationResult } from './types'

interface AppState {
  user: User | null
  currentPath: LearningPath | null
  submissions: EvidenceSubmission[]
  validations: ValidationResult[]
  setUser: (user: User | null) => void
  setCurrentPath: (path: LearningPath | null) => void
  addSubmission: (submission: EvidenceSubmission) => void
  addValidation: (validation: ValidationResult) => void
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  currentPath: null,
  submissions: [],
  validations: [],
  setUser: (user) => set({ user }),
  setCurrentPath: (path) => set({ currentPath: path }),
  addSubmission: (submission) => set((state) => ({ 
    submissions: [...state.submissions, submission] 
  })),
  addValidation: (validation) => set((state) => ({ 
    validations: [...state.validations, validation] 
  })),
}))