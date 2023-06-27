import { Tooltip } from 'react-tooltip';
import { useId } from 'react';

interface TooltipComponentProps {
  tooltipContainer: any;
  children: any;
}

export default function TooltipComponent({ tooltipContainer, children }: TooltipComponentProps) {
  const tooltipId = useId();

  return (
    <button className="self-start text-start bg-transparent border-none">
      <div id={tooltipId} className="flex items-start">
        {tooltipContainer}
      </div>

      <Tooltip anchorId={tooltipId} place="top" className="tooltip" offset={25}>
        {children}
      </Tooltip>
    </button>
  );
}
