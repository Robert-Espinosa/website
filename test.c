void main() { int a, b, c, d; 
a=1; 
b=3; 
c=5;
 d = ++a * c + b++; 
 printf("d = %d, when no parensare used.\n", d);
  printf("a=%d, b=%d, c=%d\n", a, b, c); a=1; b=3; c=5; d = (++a) * c + (b++); 
  printf("d = %d, when some parensare used.\n", d); 
  printf("a=%d, b=%d, c=%d\n", a, b, c); a=1; b=3; c=5; d = (((++a) * c) + (b++)); 
  printf("d = %d, when all parensare used.\n", d); 
  printf("a=%d, b=%d, c=%d\n", a, b, c); }