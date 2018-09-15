import { auth, githubAuthProvider } from "./firebase";

// --> Email and Password

// Sign Up
export const CreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const SignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const SignOut = () => auth.signOut();

// Password Reset
export const PasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const PasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

//  --> Auth Providers

// github
export const SignInWithGuthub = () => auth.signInWithPopup(githubAuthProvider);
