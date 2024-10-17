import { 
    Form,
     FormLabel,
      FormItem,
       FormControl,
        FormMessage,
         FormField
          } from "@/components/ui/form"
import {
        Card,
        CardContent,
        CardHeader,
        CardTitle,
          } from "@/components/ui/card"
                   
import {  Button } from '@/components/ui/button'         
import {Input} from '@/components/ui/input'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

type Credencial = {
    email: string
    password: string
}

type PropriedadesTipagem = {
    handleLogin: (data: Credencial) => void
}

export const Login = (propriedade: PropriedadesTipagem) => {

    const formSchema = z.object({
        email: z.string().email({
            message: "E-mail invalido !"
        }),
        password: z.string().min(6, {
            message: "Senha invalida!"
        })
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

      function onSubmit(event: any){
        propriedade.handleLogin(event)
      }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300">
    <Card className="sm:w-2/4 xl:max-w-4/5 bg-gray-50 rounded-lg shadow-xl p-8">
        <CardHeader className="text-center text-4xl mb-8">
            <CardTitle>
                <span className="text-black">Academi</span>
                <span className="text-blue-500">Track</span>
            </CardTitle>
        </CardHeader>
        <CardContent className="w-full h-auto flex items-center justify-center">
            <Form {...form}>
                <form className="flex justify-center items-center flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                    
                    {/* Campo de e-mail */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">E-mail</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-72 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="Digite seu E-mail aqui!"
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Campo de senha */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Senha</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-72 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="senha" 
                                        placeholder="Digite sua senha aqui!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button 
                        className="w-72 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300" 
                        type="submit"
                    >
                        Entrar
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>
</main>

  ) 
}


