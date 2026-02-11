
import mongoose from "mongoose";

const CandidatureSchema = new mongoose.Schema(
    {
        entreprise:{
            type: String,
            required: true
        },
        poste:{
            type: String,
            required: true
        },
        lien: {
            type: String
        },
        dateEnvoi: {
            type: Date
        },
        //tableau temporaire pour relance envisage de rajoute un model specifique pour
        relance:{
            relance1:{type: Date},
            relance2: {type: Date},
            relance3: {type: Date}
        }
        ,
        statut: {
            type: String,
            enum: ["En attente", "Acceptée", "Refusée"],
            default: "En attente"
        }
    }, {
        timestamps: { createdAt: true}
    }
);

export default mongoose.models.Candidatures || mongoose.model("Candidatures", CandidatureSchema);
