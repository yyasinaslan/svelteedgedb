CREATE MIGRATION m1r25voqrat74evk27d5udh524v7k6p2lpvmkv36sxz5refjwi5s7a
    ONTO initial
{
  CREATE TYPE default::Product {
      CREATE PROPERTY code: std::str;
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY name: std::str;
      CREATE PROPERTY price: std::decimal;
  };
  CREATE TYPE default::OrderLine {
      CREATE LINK product: default::Product;
      CREATE PROPERTY price: std::decimal;
  };
  CREATE TYPE default::User {
      CREATE PROPERTY email: std::str;
      CREATE PROPERTY emailVerifiedAt: std::datetime;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY password: std::str;
  };
  CREATE TYPE default::Order {
      CREATE MULTI LINK lines: default::OrderLine;
      CREATE LINK user: default::User;
      CREATE PROPERTY total: std::decimal;
  };
  CREATE TYPE default::Tax {
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY name: std::str;
      CREATE PROPERTY value: std::decimal;
  };
  CREATE TYPE default::TaxGroup {
      CREATE MULTI LINK taxes: default::Tax;
      CREATE PROPERTY value := (std::sum(.taxes.value));
      CREATE PROPERTY name: std::str;
  };
};
