import { Medication } from "@/types/medication";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Pill, CheckCircle2, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MedicationCardProps {
  medication: Medication;
  onEdit: (medication: Medication) => void;
  onDelete: (id: string) => void;
  onMarkTaken: (id: string) => void;
}

const MedicationCard = ({ medication, onEdit, onDelete, onMarkTaken }: MedicationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Pill className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{medication.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{medication.dose}</p>
            </div>
          </div>
          {medication.taken && (
            <Badge className="bg-secondary">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Taken
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{medication.time} - {medication.frequency}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{medication.startDate} to {medication.endDate}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {!medication.taken && (
            <Button
              size="sm"
              variant="default"
              onClick={() => onMarkTaken(medication.id)}
              className="flex-1"
            >
              <CheckCircle2 className="h-4 w-4 mr-1" />
              Mark as Taken
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(medication)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onDelete(medication.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationCard;
