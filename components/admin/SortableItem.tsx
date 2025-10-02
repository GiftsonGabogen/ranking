"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  GripVertical,
  Edit,
  Trash2,
  MoveUp,
  MoveDown,
  Eye,
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/components/admin/shared/DateUtils";
import type { RankingItem } from "@/lib/interfaces/rankingInterface";

interface SortableItemProps {
  item: RankingItem;
  onEdit: (item: RankingItem) => void;
  onDelete: (id: string) => void;
  onMoveUp: (item: RankingItem) => void;
  onMoveDown: (item: RankingItem) => void;
  totalItems: number;
  displayPosition: number;
}

export function SortableItem({
  item,
  onEdit,
  onDelete,
  onMoveUp,
  onMoveDown,
  totalItems,
  displayPosition
}: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex items-start gap-4 p-4 bg-white dark:bg-neutral-900 border
        border-neutral-200 dark:border-neutral-700 rounded-lg transition-all
        hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600
        ${isDragging ? 'shadow-lg ring-2 ring-primary-500/20' : ''}
      `}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="flex items-center gap-2 cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="h-4 w-4 text-muted-foreground hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors" />
        <span className="text-sm font-medium text-muted-foreground w-8 select-none">
          #{displayPosition}
        </span>
      </div>

      {/* Item Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-semibold text-foreground truncate">
            {item.title}
          </h3>
          {item.imageUrl && (
            <Badge variant="outline" className="text-xs flex-shrink-0">
              Has Image
            </Badge>
          )}
          {item.metadata && Object.keys(item.metadata).length > 0 && (
            <Badge variant="outline" className="text-xs flex-shrink-0">
              {Object.keys(item.metadata).length} Metadata Fields
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span>Updated: {formatDate(item.updatedAt)}</span>
          {item.metadata && (
            <span className="truncate">
              Metadata: {Object.keys(item.metadata).join(', ')}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 flex-shrink-0">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onMoveUp(item)}
          disabled={displayPosition <= 1}
          title="Move Up"
        >
          <MoveUp className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onMoveDown(item)}
          disabled={displayPosition >= totalItems}
          title="Move Down"
        >
          <MoveDown className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(item)}
          title="Edit Item"
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(item.id)}
          className="text-error-600 hover:text-error-700 hover:bg-error-50"
          title="Delete Item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}