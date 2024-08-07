"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { AuthError } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import React from "react";
import { emailSchema } from "@/lib/validations/auth";
import { getBrowserClient } from "@/lib/db/db-client";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email(),
});

type Inputs = z.infer<typeof formSchema>;

export function ResetPasswordRequestForm() {
    const router = useRouter();

    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const dbClient = getBrowserClient();

    const mutation = useMutation(
        async (data: Inputs) => {
            const { error } = await dbClient.auth.resetPasswordForEmail(
                data.email
            );

            if (error) {
                throw new AuthError(error.message);
            }
        },
        { retry: false }
    );

    async function onSubmit(data: Inputs) {
        mutation.mutate(data, {
            onError: (e: any) => {
                console.log(e);
            },
        });
    }

    return (
        <Form {...form}>
            <form
                className="grid gap-4"
                onSubmit={(...args) =>
                    void form.handleSubmit(onSubmit)(...args)
                }
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="abc123@case.edu"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={mutation.isLoading || mutation.isSuccess}>
                    {mutation.isLoading && (
                        <Icons.spinner
                            className="mr-2 size-4 animate-spin"
                            aria-hidden="true"
                        />
                    )}
                    Continue
                    <span className="sr-only">
                        Continue to email verification page
                    </span>
                </Button>
                {mutation.isSuccess && (
                    <span className="text-center">
                        If an account with this email address exists&nbsp;
                        <br className="hidden sm:inline" />
                        we sent you an email with instructions&nbsp;
                        <br className="hidden sm:inline" />
                        on resetting your password.
                    </span>
                )}
            </form>
        </Form>
    );
}
