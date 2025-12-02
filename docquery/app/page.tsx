import ServiceCard from "./_components/ServiceCard";

const services = [
  {
    title: "Intelligent Document Q&A",
    description:
      "Users can ask natural language questions about the content of their uploaded documents (PDFs, TXT files, etc.). The system uses the indexed information to retrieve relevant text chunks and then uses the LLM (Meta-Llama-3) to generate a concise, context-aware answer.",
    icon: "/icons/qna.jpg",
  },
  {
    title: "Secure Document Ingestion and Indexing",
    description:
      "The service accepts new documents (e.g., PDF files) and securely processes them. It splits the documents into smaller, meaningful chunks, converts those chunks into numerical embeddings, and stores them for fast retrieval.",
    icon: "/icons/ingestion.jpg",
  },
  {
    title: "Document Clustering and Organization",
    description:
      "Users can group related documents into custom, named clusters. This allows the user to scope their queries to a specific set of documents (e.g., query only the 'HR Policies Cluster' instead of all uploaded documents).",
    icon: "/icons/clustering.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#2B59C3] to-[#152A5D] flex flex-col justify-center">
      <section className=" flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center h-screen justify-center gap-4">
          <h1 className="text-4xl font-medium">DocQuery</h1>
          <p className="text-[#A9A9A9] text-2xl">THE platform for understanding your complex docs.</p>
          <div className="flex gap-5">
            <button className="bg-white text-[#2B59C3] p-2 rounded-xl text-lg font-medium">
              Login
            </button>
            <button className="bg-white text-[#2B59C3] p-2 rounded-xl text-lg font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center ">
        <h2 className="text-white text-2xl font-medium mb-2 mt-4 ">Our Services</h2>
        <div className="flex gap-10 items-center justify-center">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
