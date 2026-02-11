
import mongoose from "mongoose";

const CandidatureSchema = new mongoose.Schema(
    {
        //
    }
)

export default mongoose.models.Candidatures || mongoose.model("Candidatures", CandidatureSchema);
