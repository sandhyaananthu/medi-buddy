import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import MedicationCard from "@/components/MedicationCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { getMedications, deleteMedication, markAsTaken } from "@/utils/medicationStorage";
import { Medication } from "@/types/medication";
import { toast } from "sonner";

const MyMedications = () => {
  const navigate = useNavigate();
  const [medications, setMedications] = useState<Medication[]>([]);

  useEffect(() => {
    loadMedications();
  }, []);

  const loadMedications = () => {
    const meds = getMedications();
    setMedications(meds);
  };

  const handleEdit = (medication: Medication) => {
    // For simplicity, navigate to set reminder page
    toast.info("Navigate to edit page or implement edit dialog");
  };

  const handleDelete = (id: string) => {
    deleteMedication(id);
    loadMedications();
    toast.success("Medication deleted successfully");
  };

  const handleMarkTaken = (id: string) => {
    markAsTaken(id);
    loadMedications();
    toast.success("Medication marked as taken!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Medications</h1>
            <p className="text-muted-foreground">
              Manage your medication schedule and track your adherence
            </p>
          </div>
          <Button onClick={() => navigate("/set-reminder")}>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>

        {medications.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="bg-muted/50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No medications yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by adding your first medication reminder
            </p>
            <Button onClick={() => navigate("/set-reminder")}>
              Add Medication
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medications.map((medication) => (
              <MedicationCard
                key={medication.id}
                medication={medication}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onMarkTaken={handleMarkTaken}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyMedications;
