import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="bg-brand py-12 font-poppins md:py-14">
      <dl className="mx-auto grid max-w-[73.75rem] grid-cols-2 gap-y-10 px-4 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-base md:text-2xl">{stat.label}</dt>
            <dd className="text-4xl font-bold md:text-[3.5rem] md:leading-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
