require 'yaml'

module SiteHelpers

  def page_title
    title = "Joshua Dover"
    if data.page.title
      title = data.page.title + " | " + title
    end
    title
  end

  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Set your site description in /helpers/site_helpers.rb"
    end
    description
  end

  def self.sections
    resume = YAML.load_file(File.absolute_path('resume.yaml'))["sections"]
    puts resume
    resume
  end

  def resume_data
    YAML.load_file(File.absolute_path('resume.yaml'))
  end
end
