import mongoose from 'mongoose';
import Joi from 'joi';
const { Schema } = mongoose;

const Class10CheckSchema = new Schema(
  {
    schoolName: {
      type: String,
      required: true,
      default:''
    },
    boardOfStudies: {
      type: String,
      required: true,
      default:''
    },
    percentage: {
      type: Number,
      required: true,
      default:0
    },
    certificateURL:{
      type:String,
      required:true,
      default:''
    },
    validationStatus:{
      type:boolean,
      required:true,
      default:''
    },
    remark:{
      type:String,
      required:true,
      default:''
    },
    proofFileUrl:{
      type:String,
      required:true,
      default:''
    }

  },
  { timestamps: true },
);

caseSchema.methods.toJSON = function () {
  return {
    id: this._id,
    email: this.email,
    fistname: this.fistname,
    lastname: this.lastname,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    user: this.user.toJSON(),
  };
};

export const validateCase = (c) => {
  const schema = {
    email: Joi.string().required(),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
  };
  return Joi.validate(c, schema);
};

const Case = mongoose.model('Case', caseSchema);

export default Case;
