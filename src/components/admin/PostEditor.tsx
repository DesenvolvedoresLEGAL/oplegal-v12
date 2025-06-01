
import React, { useState, useRef } from 'react';
import { 
  Save, 
  Upload, 
  Eye, 
  Calendar,
  User,
  Tag,
  FileText,
  Image
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const PostEditor = ({ post, onSave, onCancel }) => {
  const [content, setContent] = useState(post?.content || '');
  const [coverImage, setCoverImage] = useState(post?.image || '');
  const [imagePreview, setImagePreview] = useState(post?.image || '');
  const fileInputRef = useRef(null);

  const form = useForm({
    defaultValues: {
      title: post?.title || '',
      excerpt: post?.excerpt || '',
      author: post?.author || '',
      category: post?.category || 'Tecnologia',
      status: post?.status || 'draft',
      publishDate: post?.publishDate || new Date().toISOString().split('T')[0],
      readTime: post?.readTime || '5 min',
      tags: post?.tags?.join(', ') || '',
    }
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setCoverImage(imageUrl);
        setImagePreview(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    const postData = {
      ...post,
      ...data,
      content,
      image: coverImage,
      tags: data.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      views: post?.views || 0,
      updatedAt: new Date().toISOString(),
    };

    onSave(postData);
  };

  const handlePreview = () => {
    const formData = form.getValues();
    const previewData = {
      ...formData,
      content,
      image: coverImage,
    };
    
    // Aqui você pode abrir uma modal de preview ou nova aba
    console.log('Preview data:', previewData);
    alert('Funcionalidade de preview será implementada em breve!');
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-legal font-unica">
                {post ? 'Editar Post' : 'Criar Novo Post'}
              </h2>
              <p className="text-gray-600">
                Preencha as informações do post abaixo
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                type="button" 
                variant="outline"
                onClick={handlePreview}
                className="border-legal text-legal hover:bg-legal hover:text-white"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={onCancel}
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="bg-legal text-white hover:bg-legal-purple"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-legal">
                    <FileText className="w-5 h-5 mr-2" />
                    Conteúdo Principal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Título do Post</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Digite o título do post..."
                            className="text-lg font-medium"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resumo</FormLabel>
                        <FormControl>
                          <textarea
                            placeholder="Breve descrição do post..."
                            className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-legal resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-legal">
                    <Image className="w-5 h-5 mr-2" />
                    Imagem de Capa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="border-legal text-legal hover:bg-legal hover:text-white"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Imagem
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <Input
                        type="url"
                        placeholder="Ou cole uma URL de imagem..."
                        value={coverImage}
                        onChange={(e) => {
                          setCoverImage(e.target.value);
                          setImagePreview(e.target.value);
                        }}
                        className="flex-1"
                      />
                    </div>
                    
                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg border"
                          onError={() => setImagePreview('')}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Content Editor */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-legal">Conteúdo do Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Escreva o conteúdo do seu post aqui... (Markdown suportado)"
                    className="w-full min-h-[400px] p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-legal resize-none font-mono text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Você pode usar Markdown para formatação. Suporte para **negrito**, *itálico*, [links](url), etc.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-legal">Configurações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-legal"
                          >
                            <option value="draft">Rascunho</option>
                            <option value="published">Publicado</option>
                            <option value="archived">Arquivado</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="publishDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Data de Publicação</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="readTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tempo de Leitura</FormLabel>
                        <FormControl>
                          <Input placeholder="ex: 5 min" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Author & Category */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-legal">
                    <User className="w-5 h-5 mr-2" />
                    Autor e Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autor</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome do autor" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoria</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-legal"
                          >
                            <option value="Tecnologia">Tecnologia</option>
                            <option value="IA">IA</option>
                            <option value="Tendências">Tendências</option>
                            <option value="IoT">IoT</option>
                            <option value="Segurança">Segurança</option>
                            <option value="Automação">Automação</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="tag1, tag2, tag3"
                            {...field}
                          />
                        </FormControl>
                        <p className="text-xs text-gray-500">
                          Separe as tags com vírgulas
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-legal">Ações Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full border-legal text-legal hover:bg-legal hover:text-white"
                    onClick={() => form.setValue('status', 'draft')}
                  >
                    Salvar como Rascunho
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full border-legal-green text-legal-green hover:bg-legal-green hover:text-white"
                    onClick={() => form.setValue('status', 'published')}
                  >
                    Publicar Agora
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostEditor;
