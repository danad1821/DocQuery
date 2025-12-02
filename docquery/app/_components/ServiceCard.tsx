import Image from "next/image";
export default function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-xl p-6 max-w-80 min-h-110 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center">
          <Image src={service.icon} alt={service.title} width={100} height={100} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">
        {service.title}
      </h3>
      <p className="text-gray-600 text-left">{service.description}</p>
    </div>
  );
}
