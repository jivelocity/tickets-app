"use client";

import { LucideLoaderCircle, LucideTrash } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="outline"
      size="icon"
      className="cursor-pointer"
      disabled={pending}
    >
      {pending ? (
        <LucideLoaderCircle className="h-4 w-4 animate-spin" />
      ) : (
        <LucideTrash className="h-4 w-4" />
      )}
    </Button>
  );
};

export { DeleteButton };
