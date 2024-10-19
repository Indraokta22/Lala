'use client';
import { lusitana } from '@/app/ui/fonts';
import {
  EyeIcon,
  EyeSlashIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { useState } from 'react';

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="relative flex h-screen items-center justify-center bg-gray-50">
      <div className="flex h-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <div className="flex w-1/2 flex-col justify-center bg-white p-8">
          <form action={dispatch} className="space-y-5">
            <h1 className="text-center text-2xl font-bold">LOGIN</h1>
            <p className="mb-4 text-center text-gray-600">
              Enter your username below to login to your account
            </p>

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="relative mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  className="block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  minLength={6}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex cursor-pointer items-center"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
            </div>

            <LoginButton />

            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <img
            src="/login3.jpg"
            alt="Login Image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="w-full rounded-md bg-gray-800 py-2 text-center text-white"
      aria-disabled={pending}
    >
      Log in
    </Button>
  );
}
