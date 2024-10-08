/**
 * Generated by orval v7.1.0 🍺
 * Do not edit manually.
 * SMA.Api
 * OpenAPI spec version: 1.0
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseInfiniteQueryResult,
  DefinedUseQueryResult,
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import {
  useCallback
} from 'react'
import type {
  FilterModel,
  Result,
  Staff,
  StaffIEnumerableResult,
  StaffResult
} from './api.schemas'
import { useCustomInstance } from '../../custom-instance';



type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


export const useGetApiV1StaffOneIdHook = () => {
        const getApiV1StaffOneId = useCustomInstance<StaffResult>();

        return useCallback((
    id: number,
 options?: SecondParameter<ReturnType<typeof useCustomInstance>>,signal?: AbortSignal
) => {
        return getApiV1StaffOneId(
          {url: `/api/v1/Staff/one/${id}`, method: 'GET', signal
    },
          options);
        }, [getApiV1StaffOneId])
      }
    

export const getGetApiV1StaffOneIdQueryKey = (id: number,) => {
    return [`/api/v1/Staff/one/${id}`] as const;
    }

    
export const useGetApiV1StaffOneIdInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>, TError = unknown>(id: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV1StaffOneIdQueryKey(id);

  const getApiV1StaffOneId =  useGetApiV1StaffOneIdHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>> = ({ signal }) => getApiV1StaffOneId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiV1StaffOneIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>
export type GetApiV1StaffOneIdInfiniteQueryError = unknown


export function useGetApiV1StaffOneIdInfinite<TData = InfiniteData<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>, TError = unknown>(
 id: number, options: { query:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  DefinedUseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiV1StaffOneIdInfinite<TData = InfiniteData<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiV1StaffOneIdInfinite<TData = InfiniteData<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiV1StaffOneIdInfinite<TData = InfiniteData<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiV1StaffOneIdInfiniteQueryOptions(id,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const useGetApiV1StaffOneIdQueryOptions = <TData = Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError = unknown>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiV1StaffOneIdQueryKey(id);

  const getApiV1StaffOneId =  useGetApiV1StaffOneIdHook();

    const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>> = ({ signal }) => getApiV1StaffOneId(id, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData> & { queryKey: QueryKey }
}

export type GetApiV1StaffOneIdQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>>
export type GetApiV1StaffOneIdQueryError = unknown


export function useGetApiV1StaffOneId<TData = Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError = unknown>(
 id: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiV1StaffOneId<TData = Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useGetApiV1StaffOneId<TData = Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }

export function useGetApiV1StaffOneId<TData = Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError = unknown>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetApiV1StaffOneIdHook>>>, TError, TData>>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = useGetApiV1StaffOneIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const usePostApiV1StaffAllHook = () => {
        const postApiV1StaffAll = useCustomInstance<StaffIEnumerableResult>();

        return useCallback((
    filterModel: FilterModel,
 options?: SecondParameter<ReturnType<typeof useCustomInstance>>,) => {
        return postApiV1StaffAll(
          {url: `/api/v1/Staff/all`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: filterModel
    },
          options);
        }, [postApiV1StaffAll])
      }
    


export const usePostApiV1StaffAllMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>, TError,{data: FilterModel}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>, TError,{data: FilterModel}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      const postApiV1StaffAll =  usePostApiV1StaffAllHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>, {data: FilterModel}> = (props) => {
          const {data} = props ?? {};

          return  postApiV1StaffAll(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV1StaffAllMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>>
    export type PostApiV1StaffAllMutationBody = FilterModel
    export type PostApiV1StaffAllMutationError = unknown

    export const usePostApiV1StaffAll = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>, TError,{data: FilterModel}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffAllHook>>>,
        TError,
        {data: FilterModel},
        TContext
      > => {

      const mutationOptions = usePostApiV1StaffAllMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const usePostApiV1StaffCreateHook = () => {
        const postApiV1StaffCreate = useCustomInstance<Result>();

        return useCallback((
    staff: Staff,
 options?: SecondParameter<ReturnType<typeof useCustomInstance>>,) => {
        return postApiV1StaffCreate(
          {url: `/api/v1/Staff/create`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: staff
    },
          options);
        }, [postApiV1StaffCreate])
      }
    


export const usePostApiV1StaffCreateMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>, TError,{data: Staff}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>, TError,{data: Staff}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      const postApiV1StaffCreate =  usePostApiV1StaffCreateHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>, {data: Staff}> = (props) => {
          const {data} = props ?? {};

          return  postApiV1StaffCreate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV1StaffCreateMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>>
    export type PostApiV1StaffCreateMutationBody = Staff
    export type PostApiV1StaffCreateMutationError = unknown

    export const usePostApiV1StaffCreate = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>, TError,{data: Staff}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffCreateHook>>>,
        TError,
        {data: Staff},
        TContext
      > => {

      const mutationOptions = usePostApiV1StaffCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    export const usePostApiV1StaffUpdateHook = () => {
        const postApiV1StaffUpdate = useCustomInstance<Result>();

        return useCallback((
    staff: Staff,
 options?: SecondParameter<ReturnType<typeof useCustomInstance>>,) => {
        return postApiV1StaffUpdate(
          {url: `/api/v1/Staff/update`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: staff
    },
          options);
        }, [postApiV1StaffUpdate])
      }
    


export const usePostApiV1StaffUpdateMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>, TError,{data: Staff}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>, TError,{data: Staff}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      const postApiV1StaffUpdate =  usePostApiV1StaffUpdateHook()


      const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>, {data: Staff}> = (props) => {
          const {data} = props ?? {};

          return  postApiV1StaffUpdate(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostApiV1StaffUpdateMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>>
    export type PostApiV1StaffUpdateMutationBody = Staff
    export type PostApiV1StaffUpdateMutationError = unknown

    export const usePostApiV1StaffUpdate = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>, TError,{data: Staff}, TContext>, request?: SecondParameter<ReturnType<typeof useCustomInstance>>}
): UseMutationResult<
        Awaited<ReturnType<ReturnType<typeof usePostApiV1StaffUpdateHook>>>,
        TError,
        {data: Staff},
        TContext
      > => {

      const mutationOptions = usePostApiV1StaffUpdateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    