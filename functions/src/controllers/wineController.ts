import { Request, Response } from "express";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { IWineRecord } from "../models/IWineRecord";

export const getAllWines = async (_: Request, res: Response) => {
  try {
    const querySnapshot = await getDocs(collection(db, "wines"));

    const results = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json({ data: results });
  } catch (err) {
    res.json(err);
  }
};

export const getWineById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const querySnapshot = await getDoc(doc(db, "wines", id));


    res.json({id, ...querySnapshot.data()});
  } catch (err) {
    res.json(err);
  }
};

export const createWine = async (req: Request, res: Response) => {
  try {
    const { name, type, description, price, rating } = req.body;

    const request: IWineRecord = {
      name,
      type: type ?? "",
      description: description ?? "",
      price: price ?? 0,
      rating: rating ?? 0,
      createdAt: new Date(),
      createdBy: "test",
      updatedAt: new Date(),
      updatedBy: "test",
    };

    const wine = await addDoc(collection(db, "wines"), request);
    res.json("Success! Added wine: " + wine.id);
  } catch (error) {
    res.json(error);
  }
};

export const updateWine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { update } = req.body;

    await updateDoc(doc(db, "wines", id), update);

    res.json("Success! Updated wine: " + id);
  } catch (err) {
    res.json(err);
  }
};

export const deleteWine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteDoc(doc(db, "wines", id));

    res.json("Success! Deleted wine: " + id);
  } catch (err) {
    res.json(err);
  }
};
