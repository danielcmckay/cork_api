import { ICreatedUpdatedInfo } from "./ICreatedUpdatedInfo";

export interface IWineRecord extends ICreatedUpdatedInfo {
  name: string;
  type?: string;
  year?: number;
  country?: string;
  region?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: number;
  quantity?: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
