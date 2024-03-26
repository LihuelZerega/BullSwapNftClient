import { motion } from "framer-motion";

const stats = [
  { id: 1, name: 'Users', value: '170K+' },
  { id: 2, name: 'Transactions', value: '3.9M+' },
  { id: 3, name: 'Strong Community', value: '200K+' },
];

export default function Example() {
  return (
    <div className="py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-xl sm:text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
