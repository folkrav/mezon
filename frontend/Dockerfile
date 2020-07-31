FROM node:12.18.3-alpine3.12 AS base-env
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod
ENTRYPOINT ["yarn"]


FROM base-env AS development
RUN yarn install
EXPOSE 3000
CMD ["start"]


FROM base-env AS production
COPY . .
CMD ["build"]
