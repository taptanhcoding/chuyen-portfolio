"use client";

// import { handleSubmit } from '@/app/lib/action'
import React from "react";
import FormItem from "../FormItem";
import { useRouter } from "next/navigation";

export default function FormSend() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const toMail = {
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    router.push(
      `mailto:chuyendev@gmail.com?subject=${toMail.subject}&body=${toMail.message}`
    );
  }
  return (
    <form action={handleSubmit}>
      <FormItem title="Subject(optional)" htmlFor="subject">
        <input
          placeholder=" "
          name="subject"
          type="text"
          id="subject"
          className="peer w-full border border-solid border-[#ccc] text-lg p-2"
        />
      </FormItem>
      <FormItem title="Message" htmlFor="message">
        <textarea
          placeholder=" "
          name="message"
          id="message"
          className="peer w-full border border-solid border-[#ccc] text-lg p-2"
        />
      </FormItem>
      <button className="px-4 py-1 bg-[red] text-white rounded" type="submit">
        Send
      </button>
    </form>
  );
}
