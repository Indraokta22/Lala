interface SearchInputProps {
    value: string;
    onChange: (newValue: string) => void; // Fungsi menerima string dan tidak mengembalikan apa-apa (void)
  }
  
  export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} // Menyediakan string baru dari input
        placeholder="Search..."
        className="border p-2 w-full border-5"
      />
    );
  }
  