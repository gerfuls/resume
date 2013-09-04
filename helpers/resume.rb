module Resume
  def self.method_missing(name, *args, &block)
    resume_data = YAML.load_file(File.absolute_path('resume.yaml'))
    if resume_data.has_key?(name.to_s)
      resume_data[name.to_s]
    else
      super
    end
  end
end
