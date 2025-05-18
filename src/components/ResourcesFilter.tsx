
import { Button } from "@/components/ui/button";

interface ResourcesFilterProps {
  activeFilter: string;
  onFilterChange: (filterType: string) => void;
}

const ResourcesFilter = ({ activeFilter, onFilterChange }: ResourcesFilterProps) => {
  const filterOptions = [
    { id: 'all', label: 'All Resources' },
    { id: 'guide', label: 'Guides' },
    { id: 'template', label: 'Templates' },
    { id: 'tool', label: 'Tools' },
    { id: 'checklist', label: 'Checklists' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {filterOptions.map(option => (
        <Button
          key={option.id}
          variant={activeFilter === option.id ? "default" : "outline"}
          className={`${
            activeFilter === option.id 
              ? "bg-brand-primary hover:bg-brand-accent text-white" 
              : "hover:text-brand-primary"
          }`}
          onClick={() => onFilterChange(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default ResourcesFilter;
