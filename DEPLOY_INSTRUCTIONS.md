# 🚀 Instruções para Deploy

## 📋 Passos para Publicar o Projeto

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Configure o repositório:
   - **Nome**: `valdeir-mota`
   - **Descrição**: "Cartão de visita digital do Valdeir Mota - Técnico especializado em conserto de celulares"
   - **Visibilidade**: Public (recomendado) ou Private
   - **NÃO** inicialize com README (já temos um)
4. Clique em "Create repository"

### 2. Conectar Repositório Local ao GitHub

Execute os seguintes comandos no terminal:

```bash
# Adicione o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/valdeir-mota.git

# Envie o código para o GitHub
git branch -M main
git push -u origin main
```

### 3. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `valdeir-mota`
5. Configure o projeto:
   - **Framework Preset**: Next.js (deve ser detectado automaticamente)
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)
6. Clique em "Deploy"

### 4. Configurações Adicionais (Opcional)

#### Domínio Personalizado

1. Na dashboard da Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruções

#### Variáveis de Ambiente

Se necessário, configure variáveis de ambiente na Vercel:

1. Vá em "Settings" > "Environment Variables"
2. Adicione variáveis se necessário

### 5. Verificação

Após o deploy:

1. Teste o site no domínio fornecido pela Vercel
2. Verifique se o botão do WhatsApp funciona
3. Teste o botão de ligação
4. Verifique se as animações estão funcionando

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Teste local da versão de produção
npm start

# Verificar linting
npm run lint
```

## 📱 Funcionalidades Implementadas

✅ Design responsivo e moderno  
✅ Integração com WhatsApp  
✅ Botão de ligação direta  
✅ Animações suaves  
✅ SEO otimizado  
✅ Meta tags para redes sociais  
✅ PWA ready

## 🎨 Personalização

Para personalizar o site, edite os seguintes arquivos:

- `src/app/page.tsx` - Conteúdo principal e informações de contato
- `src/app/layout.tsx` - Metadados e configurações SEO
- `src/app/globals.css` - Estilos globais

## 📞 Suporte

Se precisar de ajuda com o deploy ou personalização, entre em contato!

---

**Valdeir Mota**  
📞 (38) 9918-8516  
🔧 Técnico especializado em conserto de celulares  
🚗 Busco e entrego em casa
