# ベースイメージの指定
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# 依存パッケージのインストール
COPY package*.json ./
RUN npm install

# ソースコードの追加
COPY ./ .

# ビルドコマンドの実行
RUN npm run dev
ENV NODE_ENV=production

# コンテナ起動時のコマンド設定
CMD ["npm", "run" ,"start"]
