import { model, models, Schema } from "mongoose";

const SearchResultSchema = new Schema(
  {
    search: { type: String, trim: true, required: true },
    results: {
      nationality: {
        count: { type: Number },
        name: { type: String },
        country: [
          {
            country_id: { type: String },
            probability: { type: Number },
          },
        ],
      },
      gender: {
        count: { type: Number },
        name: { type: String },
        gender: { type: String },
        probability: { type: Number },
      },
    },
  },
  { timestamps: true },
);

const SearchResult =
  models?.SearchResult || model("SearchResult", SearchResultSchema);

export default SearchResult;
