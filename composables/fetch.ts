export const useBaseFetch = async (path: string, options: any = {}) => {
  const config = useRuntimeConfig()
  return await useFetch(() => `${config.baseUrl}${path}`, options)
}
