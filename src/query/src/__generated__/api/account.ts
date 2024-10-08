/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * SMA.Api
 * OpenAPI spec version: 1.0
 */
import { useMutation } from "@tanstack/react-query";
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { useCallback } from "react";
import type { StringResult, UserModel } from "./api.schemas";
import { useCustomInstance } from "../../custom-instance";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const usePostApiV1AccountSigninHook = () => {
  const postApiV1AccountSignin = useCustomInstance<StringResult>();

  return useCallback(
    (
      userModel: UserModel,
      options?: SecondParameter<ReturnType<typeof useCustomInstance>>
    ) => {
      return postApiV1AccountSignin(
        {
          url: `/api/v1/account/signin`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: userModel,
        },
        options
      );
    },
    [postApiV1AccountSignin]
  );
};

export const usePostApiV1AccountSigninMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>,
    TError,
    { data: UserModel },
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>,
  TError,
  { data: UserModel },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const postApiV1AccountSignin = usePostApiV1AccountSigninHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>,
    { data: UserModel }
  > = (props) => {
    const { data } = props ?? {};

    return postApiV1AccountSignin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiV1AccountSigninMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>
>;
export type PostApiV1AccountSigninMutationBody = UserModel;
export type PostApiV1AccountSigninMutationError = unknown;

export const usePostApiV1AccountSignin = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>,
    TError,
    { data: UserModel },
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSigninHook>>>,
  TError,
  { data: UserModel },
  TContext
> => {
  const mutationOptions = usePostApiV1AccountSigninMutationOptions(options);

  return useMutation(mutationOptions);
};
export const usePostApiV1AccountSignupHook = () => {
  const postApiV1AccountSignup = useCustomInstance<StringResult>();

  return useCallback(
    (
      userModel: UserModel,
      options?: SecondParameter<ReturnType<typeof useCustomInstance>>
    ) => {
      return postApiV1AccountSignup(
        {
          url: `/api/v1/account/signup`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: userModel,
        },
        options
      );
    },
    [postApiV1AccountSignup]
  );
};

export const usePostApiV1AccountSignupMutationOptions = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>,
    TError,
    { data: UserModel },
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>,
  TError,
  { data: UserModel },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const postApiV1AccountSignup = usePostApiV1AccountSignupHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>,
    { data: UserModel }
  > = (props) => {
    const { data } = props ?? {};

    return postApiV1AccountSignup(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiV1AccountSignupMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>
>;
export type PostApiV1AccountSignupMutationBody = UserModel;
export type PostApiV1AccountSignupMutationError = unknown;

export const usePostApiV1AccountSignup = <
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>,
    TError,
    { data: UserModel },
    TContext
  >;
  request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof usePostApiV1AccountSignupHook>>>,
  TError,
  { data: UserModel },
  TContext
> => {
  const mutationOptions = usePostApiV1AccountSignupMutationOptions(options);

  return useMutation(mutationOptions);
};
