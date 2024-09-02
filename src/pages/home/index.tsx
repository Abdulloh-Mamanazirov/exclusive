import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const index = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default index
