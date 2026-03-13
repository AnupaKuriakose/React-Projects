export default function Page() {
  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact details</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-grey-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-grey-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-grey-700"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            name="message"
            rows="4"
            className="border border-grey-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="text-white bg-blue-600 rounded-md p-3">
          Send Message
        </button>
      </form>
    </main>
  );
}
