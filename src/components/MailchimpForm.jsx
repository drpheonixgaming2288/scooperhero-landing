import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col gap-2 min-[400px]:flex-row overflow-hidden"
    >
      {status !== "success" && (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "sending"}
            className="h-10 px-4 border-sm text-sm text-[#000] border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#4A90E2]"
            required
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="h-10 px-8 rounded bg-[#4A90E2] text-sm font-medium text-white shadow transition-colors hover:bg-[#3D7AB9] focus:outline-none focus:ring-1 focus:ring-[#4A90E2] disabled:bg-gray-600"
          >
            Join the Waitlist
          </button>
        </>
      )}

      <div className="mt-4">
        {status === "sending" && (
          <div className="p-3 text-sm text-blue-700 bg-blue-100 border border-blue-200 rounded">
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            className="p-3 text-sm text-red-700 bg-red-100 border border-red-200 rounded"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="p-3 text-sm text-green-700 bg-green-100 border border-green-200 rounded"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <div className="w-full pt-5">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
