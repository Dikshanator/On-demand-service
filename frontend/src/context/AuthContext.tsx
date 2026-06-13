import React, { createContext, useContext, useState, useCallback } from 'react';

export type UserRole = 'client' | 'provider' | null;
export type AuthStep = 
  | 'initial' 
  | 'role-selection' 
  | 'login' 
  | 'register' 
  | 'authenticated';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  confirmPassword: string;
  profilePhoto?: string;
  serviceCategory?: string;
  documentType?: string;
  documentNumber?: string;
  documentFrontPhoto?: string;
  documentBackPhoto?: string;
  selfieWithId?: string;
  trainingCertificate?: string;
  introVideo?: string;
  termsAgreed: boolean;
}

interface AuthContextType {
  userRole: UserRole;
  authStep: AuthStep;
  registrationData: RegistrationData;
  setUserRole: (role: UserRole) => void;
  setAuthStep: (step: AuthStep) => void;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  resetAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [authStep, setAuthStep] = useState<AuthStep>('initial');
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });

  const updateRegistrationData = useCallback((data: Partial<RegistrationData>) => {
    setRegistrationData((prev) => ({ ...prev, ...data }));
  }, []);

  const resetAuth = useCallback(() => {
    setUserRole(null);
    setAuthStep('initial');
    setRegistrationData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
      termsAgreed: false,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userRole,
        authStep,
        registrationData,
        setUserRole,
        setAuthStep,
        updateRegistrationData,
        resetAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
