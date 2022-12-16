import { Request, Response } from "express";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Sign up
const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      auth.updateCurrentUser(userCreds.user);

      res.json({ message: `Success! Created user ${email}`, status: 200 });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.json({ message: errorMessage, status: errorCode });
    });
};

// Sign up
const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      auth.updateCurrentUser(userCreds.user);
      res.json({
        message: `Success! Created user ${email}`,
        status: 200,
      });
    })
    .catch((error) => {
      res.json(error);
    });
};

// Sign up
const signUserOut = async (req: Request, res: Response) => {
  const { email } = req.body;

  signOut(auth)
    .then(() => {
      res.json({
        message: `Signed out user ${email}`,
        status: 200,
      });
    })
    .catch((error) => {
      res.json(error);
    });
};

export { signUp, logIn, signUserOut };
