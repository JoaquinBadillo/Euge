//@ts-nocheck

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";

export const Projects = ({items}: any) => (
    <BentoGrid className="max-w-4xl mx-auto">
      {
        items.map((item, i) => (
            <a href={`/proyectos/${item.slug}`} className="contents">
              <BentoGridItem
                key={i}
                title={item.heading}
                description={item.subheading}
                header={<Skeleton/>}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </a>
          )
        )
      }
    </BentoGrid>
)
