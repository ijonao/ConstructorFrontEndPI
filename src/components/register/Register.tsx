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


export const Register = ({criarConta}: any) => {

    const formSchema = z.object({
        nome: z.string().min(2, {
            message: "Nome invalido!"
        }),
        email: z.string().email({
            message: "E-mail invalido !"
        }),
        cargo: z.enum(['aluno', 'professor'], {
            message: "Cargo invalido !"
        }),
        ra: z.string().min(13 , {
            message: "RA invalido !"
        }),

        curso: z.string().min(3, {
            message: "Curso invalido !"
        }),

        periodo: z.string().min(1, {
            message: "Periodo invalido!"
        }),

        semestre: z.string().min(1, {
            message: "Selecione um semetre!"
        }),

        duracao: z.string().min(1, {
            message: "Duração invalido !"
        }),
    
        senha: z.string().min(6, {
            message: "Senha invalida!"
        })
    })
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          nome: "",
          email: "",
          cargo: "",
          ra: "",
          curso: "",
          duracao: "",
          periodo: "",
          semestre: "",
          senha: ""
        },
      })
      
      function onSubmit(event: any){
        criarConta(event)
      }

  return (
    
    <Card className="h-auto flex-1 bg-gray-50 rounded-lg shadow-xl p-8">
        <CardHeader className="text-center text-4xl mb-8">
            <CardTitle>
                <span className="text-black">Academi</span>
                <span className="text-blue-500">Track</span>
            </CardTitle>
        </CardHeader>
        <CardContent className="w-fullh-auto">
            <Form {...form} >
                <form className="flex flex-col gap-6 justify-center items-center"  onSubmit={form.handleSubmit(onSubmit)}>
                    
                         {/* Campo de e-mail */}
                         <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Nome</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="Digite seu Nome aqui!"
                                        type="text"
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Campo de e-mail */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">E-mail</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        placeholder="Digite seu E-mail aqui!"
                                        type="email"
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Campo de cargo */}
                    <FormField
                        control={form.control}
                        name="cargo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Cargo</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="[aluno, professor]!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     {/* Campo de RA */}
                     <FormField
                        control={form.control}
                        name="ra"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">RA</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="RA deve conter 13 digitos!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                         {/* Campo de Curso */}
                         <FormField
                        control={form.control}
                        name="curso"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Curso</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="nome ou sigla do curso!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                                 {/* Campo de duração */}
                                 <FormField
                        control={form.control}
                        name="duracao"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Duração</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="número de semestres" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                                   {/* Campo de periodo */}
                                   <FormField
                        control={form.control}
                        name="periodo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Periodo</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="Período!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                                                {/* Campo de semetre */}
                                                <FormField
                        control={form.control}
                        name="semestre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Semestre</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="text" 
                                        placeholder="número!" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">Senha</FormLabel>
                                <FormControl>
                                    <Input 
                                        className="w-[500px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        type="password" 
                                        placeholder="minimo 6 digitos" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Botão estilizado */}
                    <Button 
                        className="w-[500px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300" 
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </form>
            </Form>
        </CardContent>
    </Card>

  ) 
}


export default Register
