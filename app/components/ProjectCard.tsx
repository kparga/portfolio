import Link from "next/link";
import ArrowUpRightIcon from "./ArrowUpRightIcon";

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "teal" | "rose" , href: string }) {
  // Valid color options for the card styling
  const validColors = ["teal", "rose"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "teal";

  const colorClasses = {
    teal: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    rose: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
  };

  const textColors = {
    teal: "group-hover:text-tropical-teal",
    rose: "group-hover:text-rose",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-graphite border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-deep-teal transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-gray-400 bg-gray-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-tropical-teal group-hover:text-tropical-teal transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
export default ProjectCard
